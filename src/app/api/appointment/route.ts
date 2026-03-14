import { NextResponse } from "next/server";

interface AppointmentRequest {
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  firstName: string;
  lastName?: string;
  phone: string;
  email?: string;
  insurance?: string;
  notes?: string;
}

export async function POST(request: Request) {
  try {
    const data: AppointmentRequest = await request.json();

    // Basic validation
    if (!data.firstName || !data.phone) {
      return NextResponse.json(
        { error: "Name and phone number are required" },
        { status: 400 }
      );
    }

    // Log the appointment request (replace with email service like Resend in production)
    console.log("=== New Appointment Request ===");
    console.log(`Name: ${data.firstName} ${data.lastName || ""}`);
    console.log(`Phone: ${data.phone}`);
    console.log(`Email: ${data.email || "Not provided"}`);
    console.log(`Service: ${data.service || "Not specified"}`);
    console.log(`Preferred Date: ${data.preferredDate || "Not specified"}`);
    console.log(`Preferred Time: ${data.preferredTime || "Not specified"}`);
    console.log(`Insurance: ${data.insurance || "Not provided"}`);
    console.log(`Notes: ${data.notes || "None"}`);
    console.log("==============================");

    // TODO: Send email via Resend
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'appointments@saltzdentalcenter.com',
    //   to: 'saltzdentalcenter@gmail.com',
    //   subject: `New Appointment Request: ${data.firstName} ${data.lastName || ''}`,
    //   html: `...`,
    // });

    return NextResponse.json(
      { success: true, message: "Appointment request received" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
