// Input.js
export default function Input({ label, saveFun, textarea, value, ...props }) {
  function handleChange(e) {
    saveFun(label, e.target.value);
  }

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={handleChange}
          {...props}
        />
      ) : (
        <input
          value={value}
          onChange={handleChange}
          {...props}
        />
      )}
    </p>
  );
}
