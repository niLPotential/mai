export default function Page() {
  return (
    <form>
      <textarea></textarea>
      <input type="number" min={0} />
      <input type="number" min={0} />
      <input type="file" accept="audio/*" />

      <input type="file" accept="image/*" />
    </form>
  );
}
