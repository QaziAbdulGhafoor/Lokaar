export default function MessageCard({ message = "Please log in first" }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-8 py-6 text-center">
        <p className="text-gray-700 font-medium">{message}</p>
      </div>
    </div>
  );
}
