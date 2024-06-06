import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export async function GET(request, { params }) {
    try {
        const result = await prisma.task.findUnique({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json({
            status: "success",
            message: `Obtained task ${params.id}`,
            payload: result
        })
    }
    catch (error) {
        return NextResponse.json({
            status: "error",
            error: error.message
        })
    }
}

export async function PUT(request, { params }) {
    try {
        const data = await request.json()
        const result = await prisma.task.update({
            where: {
                id: Number(params.id)
            },
            data: data
        })
        return NextResponse.json({
            status: "success",
            message: `Update task ${params.id}`,
            payload: result
        })
    }
    catch (error) {
        return NextResponse.json({
            status: "error",
            error: error.message
        })
    }
}

export async function DELETE(request, { params }) {
    try {
        const result = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json({
            status: "success",
            message: `Delete task ${params.id}`,
            payload: result
        })
    }
    catch (error) {
        return NextResponse.json({
            status: "error",
            error: error.message
        })
    }
}