import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    await client.connect();
    const database = client.db("Mentron");
    const collection = database.collection("individual-inquiries");
    
    const result = await collection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    return NextResponse.json(
      { error: "Failed to save inquiry" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
