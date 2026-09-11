export function AnnouncementBar() {
  return (
    <div className="bg-forest text-ivory">
      <div className="mx-auto flex max-w-[1500px] items-center justify-center gap-4 px-4 py-2.5 sm:justify-between">
        <p className="label-caps text-[0.65rem] text-ivory/90">
          Free delivery on orders over ৳2,500
        </p>

        <ul className="hidden items-center gap-4 sm:flex">
          {["Free Delivery", "Secure Checkout", "Easy Returns"].map(
            (item, i) => (
              <li key={item} className="flex items-center gap-4">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="h-3 w-px bg-ivory/25"
                  />
                )}

                <span className="label-caps text-[0.65rem] text-ivory/70">
                  {item}
                </span>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}