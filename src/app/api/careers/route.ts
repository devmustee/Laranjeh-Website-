import { NextResponse } from "next/server";
import { z } from "zod";

const careerSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  position: z.string().min(2, "Position must be selected"),
  coverLetter: z.string().min(10, "Cover letter must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = careerSchema.parse(body);

    // In production, integrate candidate database logging or CV attachments upload logic here.

    return NextResponse.json({
      success: true,
      message: `Application submitted successfully for ${payload.fullName}. We will review your profile shortly.`,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
