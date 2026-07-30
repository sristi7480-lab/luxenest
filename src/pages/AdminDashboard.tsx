import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

interface DbProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  original_price: string | null;
  rating: number;
  sale: boolean;
  editors_choice: boolean;
  affiliate_url: string;
  category: string;
}

const ADMIN_USER_ID = "3f58a196-2e0f-4a01-a7a0-0ece9be3c6c1";

const CATEGORIES = [
  "living-room",
  "bedroom",
  "dining-room",
  "kitchen",
  "bathroom",
  "wall-decor",
  "lighting",
  "boho-decor",
  "modern-farmhouse",
  "scandinavian-style",
  "japandi-interior",
  "industrial-design",
];

const emptyForm = {
  name: "",
  description: "",
  image: "",
  price: "",
  original_price: "",
  rating: 5,
  sale: false,
  editors_choice: false,
  affiliate_url: "",
  category: CATEGORIES[0],
};

export default function AdminDashboard() {
  const [userId, setUserId] = useState<string | null>(null);
  const [products, setProducts] = useState<DbProduct[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserId(session?.user?.id ?? null);
      setLoading(false);
    });
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching products:", error.message);
      return;
    }
    setProducts(data as DbProduct[]);
  };

  useEffect(() => {
    if (userId === ADMIN_USER_ID) {
      fetchProducts();
    }
  }, [userId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      description: form.description,
      image: form.image,
      price: form.price,
      original_price: form.original_price || null,
      rating: Number(form.rating),
      sale: form.sale,
      editors_choice: form.editors_choice,
      affiliate_url: form.affiliate_url,
      category: form.category,
    };

    if (editingId) {
      const { error } = await supabase
        .from("products")
        .update(payload)
        .eq("id", editingId);

      if (error) {
        alert("Error updating product: " + error.message);
        return;
      }
    } else {
      const { error } = await supabase.from("products").insert(payload);

      if (error) {
        alert("Error adding product: " + error.message);
        return;
      }
    }

    setForm(emptyForm);
    setEditingId(null);
    fetchProducts();
  };

  const handleEdit = (product: DbProduct) => {
    setForm({
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      original_price: product.original_price ?? "",
      rating: product.rating,
      sale: product.sale,
      editors_choice: product.editors_choice,
      affiliate_url: product.affiliate_url,
      category: product.category ?? CATEGORIES[0],
    });
    setEditingId(product.id);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;

    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      alert("Error deleting product: " + error.message);
      return;
    }
    fetchProducts();
  };

  const handleCancelEdit = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  if (loading) {
    return <div className="max-w-4xl mx-auto px-6 py-32 text-center">Loading...</div>;
  }

  if (userId !== ADMIN_USER_ID) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-2xl font-semibold mb-2">Access Denied</h1>
        <p className="text-foreground/60">This page is restricted to the site admin.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <h1 className="font-display text-3xl font-semibold mb-8">
        {editingId ? "Edit Product" : "Add New Product"}
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-4 mb-16 border border-border p-6 rounded-xl">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product name"
          required
          className="border border-border rounded-lg px-4 py-2"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="border border-border rounded-lg px-4 py-2"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
          className="border border-border rounded-lg px-4 py-2"
        />

        <label className="flex flex-col gap-1">
          Category
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border border-border rounded-lg px-4 py-2"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c.replace("-", " ")}
              </option>
            ))}
          </select>
        </label>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price (e.g. ₹999)"
            required
            className="border border-border rounded-lg px-4 py-2"
          />
          <input
            name="original_price"
            value={form.original_price}
            onChange={handleChange}
            placeholder="Original price (optional)"
            className="border border-border rounded-lg px-4 py-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 items-center">
          <label className="flex items-center gap-2">
            Rating:
            <input
              type="number"
              name="rating"
              min={1}
              max={5}
              value={form.rating}
              onChange={handleChange}
              className="border border-border rounded-lg px-3 py-1 w-20"
            />
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="sale"
                checked={form.sale}
                onChange={handleChange}
              />
              On Sale
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="editors_choice"
                checked={form.editors_choice}
                onChange={handleChange}
              />
              Editor's Choice
            </label>
          </div>
        </div>
        <input
          name="affiliate_url"
          value={form.affiliate_url}
          onChange={handleChange}
          placeholder="Amazon affiliate link"
          required
          className="border border-border rounded-lg px-4 py-2"
        />

        <div className="flex gap-3 mt-2">
          <button type="submit" className="btn-primary px-6 py-2">
            {editingId ? "Update Product" : "Add Product"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="border border-border rounded-lg px-6 py-2"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h2 className="font-display text-2xl font-semibold mb-6">
        All Products ({products.length})
      </h2>

      <div className="grid gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-4 border border-border rounded-lg p-4"
          >
            <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded" />
            <div className="flex-1">
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-foreground/60">
                {p.price} · {p.category}
              </p>
            </div>
            <button
              onClick={() => handleEdit(p)}
              className="text-sm underline text-foreground/70 hover:text-primary"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(p.id)}
              className="text-sm underline text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}