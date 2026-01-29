import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, 
  users, 
  contactSubmissions, 
  InsertContactSubmission,
  partnerApplications,
  InsertPartnerApplication,
  demoRequests,
  InsertDemoRequest,
  newsletterSubscriptions,
  InsertNewsletterSubscription,
  trialSignups,
  InsertTrialSignup
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ==================== Contact Submissions ====================

export async function createContactSubmission(data: InsertContactSubmission) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(contactSubmissions).values(data);
  return { id: result[0].insertId };
}

export async function getContactSubmissions(limit = 100) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt)).limit(limit);
}

// ==================== Partner Applications ====================

export async function createPartnerApplication(data: InsertPartnerApplication) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(partnerApplications).values(data);
  return { id: result[0].insertId };
}

export async function getPartnerApplications(limit = 100) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  return db.select().from(partnerApplications).orderBy(desc(partnerApplications.createdAt)).limit(limit);
}

// ==================== Demo Requests ====================

export async function createDemoRequest(data: InsertDemoRequest) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(demoRequests).values(data);
  return { id: result[0].insertId };
}

export async function getDemoRequests(limit = 100) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  return db.select().from(demoRequests).orderBy(desc(demoRequests.createdAt)).limit(limit);
}

// ==================== Newsletter Subscriptions ====================

export async function createNewsletterSubscription(data: InsertNewsletterSubscription) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  // Check if email already exists
  const existing = await db.select().from(newsletterSubscriptions).where(eq(newsletterSubscriptions.email, data.email)).limit(1);
  
  if (existing.length > 0) {
    // If already subscribed and active, return existing
    if (existing[0].isActive) {
      return { id: existing[0].id, alreadySubscribed: true };
    }
    // If unsubscribed, reactivate
    await db.update(newsletterSubscriptions)
      .set({ isActive: true, unsubscribedAt: null })
      .where(eq(newsletterSubscriptions.email, data.email));
    return { id: existing[0].id, reactivated: true };
  }
  
  const result = await db.insert(newsletterSubscriptions).values(data);
  return { id: result[0].insertId };
}

export async function unsubscribeNewsletter(email: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  await db.update(newsletterSubscriptions)
    .set({ isActive: false, unsubscribedAt: new Date() })
    .where(eq(newsletterSubscriptions.email, email));
  
  return { success: true };
}

export async function getNewsletterSubscriptions(limit = 100) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  return db.select().from(newsletterSubscriptions).orderBy(desc(newsletterSubscriptions.subscribedAt)).limit(limit);
}

// ==================== Trial Signups ====================

export async function createTrialSignup(data: InsertTrialSignup) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(trialSignups).values(data);
  return { id: result[0].insertId };
}

export async function getTrialSignups(limit = 100) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  return db.select().from(trialSignups).orderBy(desc(trialSignups.createdAt)).limit(limit);
}
