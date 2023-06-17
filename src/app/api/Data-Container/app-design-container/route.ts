import { NextResponse } from "next/server";
import data from "./app-design-container.json";

export async function GET() {
    return NextResponse.json(data)
}