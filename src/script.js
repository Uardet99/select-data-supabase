document.addEventListener("DOMContentLoaded", () => {
  const SUPABASE_URL = "https://cpkeeodtvoaxpnmbillo.supabase.co";
  const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa2Vlb2R0dm9heHBubWJpbGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MzI2MDAsImV4cCI6MjAxNTIwODYwMH0.8AKwzEXUbrn-TGPFDAdketcWPVULnWuHktGGaBt_71M";
  const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  async function fetchProducts() {
    let { data: productos, error } = await supabaseClient
      .from("productos")
      .select("*");

    if (error) {
      console.error("Error fetching productos", error);
      return;
    }

    return productos;
  }

  fetchProducts().then((productos) => {
    for (let i = 0; i < productos.length; i++) {
      console.log(productos[i].name);
      
    }
  });
});
