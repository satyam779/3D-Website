async function test() {
  try {
    const res = await fetch('http://localhost:3000');
    const html = await res.text();
    console.log('Status:', res.status);
    console.log('HTML Length:', html.length);
    const cssMatch = html.match(/href="([^"]+\.css[^"]*)"/);
    console.log('CSS Match:', cssMatch ? cssMatch[1] : 'No CSS found');
    if (cssMatch) {
      const cssRes = await fetch('http://localhost:3000' + cssMatch[1]);
      const css = await cssRes.text();
      console.log('CSS Status:', cssRes.status);
      console.log('CSS Length:', css.length);
      console.log('CSS Snippet:', css.substring(0, 300));
    }
  } catch (err) {
    console.error('Fetch error:', err);
  }
}
test();
