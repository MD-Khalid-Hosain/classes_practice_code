export default function Panel({ title, children, isActive, onActive }) {
  return (
    <>
      <section className="border px-8 mt-5">
        <h2 className="font-bold text-2xl">{title}</h2>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button
            onClick={onActive}
            className="px-8 bg-black text-white rounded-full"
          >
            Show
          </button>
        )}
      </section>
    </>
  );
}
