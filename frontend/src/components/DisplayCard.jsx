export default function DisplayCard({ data, onRegenerate }) {
  if (!data) return null;

  return (
    <>
      <h1 className="name"> Business Name: {data.name}</h1>
      <h1 className="location">Location: {data.location}</h1>
      <div className="border p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-2 heading">Business Details</h2>

        <p className="rating">⭐ Rating: {data.rating}</p>
        <p className="reviews">📝 Reviews: {data.reviews}</p>
        <p className="mt-2 font-semibold heading">{data.headline}</p>
        <button onClick={onRegenerate} className="mt-4 bg-green-500 text-white p-2 rounded">Regenerate SEO Headline</button>
      </div>
    </>
  );
}
