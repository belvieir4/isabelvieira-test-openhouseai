export async function GET() {
  const res = await fetch(
    "https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json"
  );
  return Response.json(await res.json());
}
