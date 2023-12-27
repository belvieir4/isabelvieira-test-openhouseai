export async function GET() {
  const res = await fetch(
    "https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json"
  );
  return Response.json(await res.json());
}
