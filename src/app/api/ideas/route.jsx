export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const pageNumber = searchParams.get("page[number]") || 1;
  const pageSize   = searchParams.get("page[size]") || 10;
  const sort       = searchParams.get("sort") || "-published_at";

  const appendParams = searchParams.getAll("append[]");
  const query = new URLSearchParams();

  query.append("page[number]", pageNumber);
  query.append("page[size]", pageSize);
  query.append("sort", sort);

  appendParams.forEach(a => query.append("append[]", a));

  const apiUrl = `https://suitmedia-backend.suitdev.com/api/ideas?${query.toString()}`;

  const res = await fetch(apiUrl, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  const data = await res.json();


  return Response.json(data);
}