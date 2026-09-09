// Reserved for the future multi-property brand homepage.
// Do not redirect the root or set a global basePath: each property owns its route.
export const metadata = {
  title: 'Shemesh Boutique',
  alternates: { canonical: '/' },
  robots: { index: false, follow: true },
};
export default function BrandHome() {
  return <main style={{maxWidth:720,margin:'15vh auto',padding:24,fontFamily:'Arial, sans-serif',textAlign:'center'}}><h1>Shemesh Boutique</h1><p>האתר הראשי בקרוב</p><a href="/ahuza">לאתר אחוזת השמש</a></main>;
}
