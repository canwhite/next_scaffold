export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const hello = searchParams.get("hello");
  return Response.json({ data: hello });
}

export async function POST(request: Request) {
  const data = await request.json();
  return Response.json({ data: data });
}
