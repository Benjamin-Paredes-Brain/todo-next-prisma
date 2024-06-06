import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
    try {
        const result = await prisma.task.findMany()

        return NextResponse.json({
            status: "success",
            payload: result
        })
    }
    catch (error) {
        return NextResponse.json({
            status: "error",
            payload: error.message
        })
    }
}

export async function POST(request) {
    try {
        const { title, description } = await request.json()
        const result = await prisma.task.create({
            data: {
                title,
                description
            }
        })
        return NextResponse.json({
            status: "success",
            payload: result
        })
    }
    catch (error) {
        return NextResponse.json({
            status: "error",
            payload: error.message
        })
    }
}