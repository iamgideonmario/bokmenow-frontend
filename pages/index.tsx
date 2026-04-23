import Calendar from '../components/Calendar';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Me Now</h1>
      <Calendar hostSlug="demo-host" />
    </div>
  );
}