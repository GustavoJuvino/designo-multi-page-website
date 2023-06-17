import { NextResponse } from "next/server";
import data from "./app-design-cards.json";

export async function GET() {
    return NextResponse.json(data)
}
