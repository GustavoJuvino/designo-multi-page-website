import { NextResponse } from "next/server";
import data from "./web-design-container.json";

export async function GET() {
    return NextResponse.json(data)
}