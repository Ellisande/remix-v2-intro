type SelectedSize = "sm" | "md" | "lg" | "xl";

const makeStyle = (selectedSize: SelectedSize, size: SelectedSize) => {
  if (selectedSize === size) {
    return "selected size-button";
  }
  return "size-button";
};

export const SizeSelect = ({
  selectedSize,
}: {
  selectedSize: SelectedSize;
}) => {
  return (
    <>
      <button name="size" value="sm" className={makeStyle(selectedSize, "sm")}>
        Small
      </button>
      <button name="size" value="md" className={makeStyle(selectedSize, "md")}>
        Medium
      </button>
      <button name="size" value="lg" className={makeStyle(selectedSize, "lg")}>
        Large
      </button>
      <button name="size" value="xl" className={makeStyle(selectedSize, "xl")}>
        Extra Large
      </button>
    </>
  );
};
