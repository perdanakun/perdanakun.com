/**
 * Dummy function to simulate the portfolio AI Assistant.
 * When you are ready, you can simply replace the contents of this function
 * with a real API call (e.g., Gemini API or Groq API)
 * without needing to change any UI code (App.jsx).
 */
export const getAIResponse = async (prompt) => {
  // Simulate AI thinking time (1 second) for a natural feel
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const lowerPrompt = prompt.toLowerCase();

  // --- GREETINGS ---
  if (
    lowerPrompt.includes('hello') ||
    lowerPrompt.includes('hi') ||
    lowerPrompt.includes('halo') ||
    lowerPrompt.includes('hai') ||
    lowerPrompt.includes('pagi') ||
    lowerPrompt.includes('siang') ||
    lowerPrompt.includes('malam')
  ) {
    return "Hey there! 👋 I'm Perdana's portfolio assistant. Ask me about his projects, background, skills, clients, or how to get in touch!";
  }

  // --- WHO IS PERDANA / ABOUT ---
  if (
    lowerPrompt.includes('who is') ||
    lowerPrompt.includes('about') ||
    lowerPrompt.includes('siapa') ||
    lowerPrompt.includes('perkenalan') ||
    lowerPrompt.includes('tentang')
  ) {
    return "Perdana is a freelance graphic designer and icon design specialist based in Yogyakarta, Indonesia. He leads a small creative studio called Conania, and describes his approach as 'logic + magic' — blending structured, engineering-informed thinking with creative intuition. He sees himself less as a hired-hand designer and more as a creative founder.";
  }

  // --- PROJECTS / PORTFOLIO / WORK ---
  if (
    lowerPrompt.includes('project') ||
    lowerPrompt.includes('work') ||
    lowerPrompt.includes('portfolio') ||
    lowerPrompt.includes('proyek') ||
    lowerPrompt.includes('karya')
  ) {
    return "Perdana has completed 3,000+ global design projects — spanning branding, logo design, illustration, packaging, social media ads, and especially icon systems for startup apps, websites, and pitch decks. You can check out his work on Fiverr, Dribbble, or the project folders on this desktop!";
  }

  // --- ICON DESIGN (his specialty) ---
  if (
    lowerPrompt.includes('icon') ||
    lowerPrompt.includes('ikon')
  ) {
    return "Icons are Perdana's specialty. He designs custom icon systems for founders and early-stage startups — used in websites, apps, presentations, and pitch decks — and has also built large icon sets for enterprise clients like Bank Mandiri, Telkom Indonesia, and Kementerian Dalam Negeri.";
  }

  // --- SKILLS / SERVICES ---
  if (
    lowerPrompt.includes('skill') ||
    lowerPrompt.includes('service') ||
    lowerPrompt.includes('offer') ||
    lowerPrompt.includes('jasa') ||
    lowerPrompt.includes('keahlian')
  ) {
    return "His core services: branding & logo design, custom icon systems, illustration, packaging design, and social media ad creatives. Thanks to a vocational electrical engineering background before design, he brings a more structured, systems-based approach to visual problem-solving than most designers.";
  }

  // --- BACKGROUND / EDUCATION / CV ---
  if (
    lowerPrompt.includes('cv') ||
    lowerPrompt.includes('background') ||
    lowerPrompt.includes('education') ||
    lowerPrompt.includes('kuliah') ||
    lowerPrompt.includes('pendidikan') ||
    lowerPrompt.includes('resume') ||
    lowerPrompt.includes('experience') ||
    lowerPrompt.includes('pengalaman')
  ) {
    return "Perdana holds an S1 degree in Visual Communication Design (DKV), completed in 2021, and started his design career with an earlier role at Sinidikara in Greater Jakarta (including work for PT Mayora Indah Tbk), followed by Mehibi Studio. He has 10+ years of overall design experience and has been freelancing since around 2015–2016.";
  }

  // --- CLIENTS ---
  if (
    lowerPrompt.includes('client') ||
    lowerPrompt.includes('klien') ||
    lowerPrompt.includes('company') ||
    lowerPrompt.includes('perusahaan')
  ) {
    return "Perdana has worked with 3,000+ global clients — mostly founders and early-stage startups — plus notable touchpoints with Bank Mandiri, Telkom Indonesia, Kementerian Dalam Negeri, and international NGOs.";
  }

  // --- WHERE / LOCATION ---
  if (
    lowerPrompt.includes('where') ||
    lowerPrompt.includes('location') ||
    lowerPrompt.includes('based') ||
    lowerPrompt.includes('domisili') ||
    lowerPrompt.includes('lokasi') ||
    lowerPrompt.includes('tinggal')
  ) {
    return "Perdana is based in Yogyakarta, Central Java, Indonesia, and works with clients around the world remotely.";
  }

  // --- PLATFORMS / WHERE TO FIND WORK ---
  if (
    lowerPrompt.includes('fiverr') ||
    lowerPrompt.includes('dribbble') ||
    lowerPrompt.includes('platform') ||
    lowerPrompt.includes('social media') ||
    lowerPrompt.includes('instagram')
  ) {
    return "You can find more of his work on Fiverr and Dribbble, which are his main platforms for client work and showcasing icon design projects.";
  }

  // --- STUDIO / TEAM ---
  if (
    lowerPrompt.includes('studio') ||
    lowerPrompt.includes('team') ||
    lowerPrompt.includes('tim') ||
    lowerPrompt.includes('conania')
  ) {
    return "Perdana leads Conania, a small freelance creative studio, where he and his team take on branding, illustration, and large-scale icon system projects for clients worldwide.";
  }

  // --- PRICING / RATES / HIRE COST ---
  if (
    lowerPrompt.includes('price') ||
    lowerPrompt.includes('rate') ||
    lowerPrompt.includes('cost') ||
    lowerPrompt.includes('harga') ||
    lowerPrompt.includes('tarif') ||
    lowerPrompt.includes('budget')
  ) {
    return "Pricing depends on project scope — icon set size, illustration complexity, and turnaround time all factor in. The best way to get an accurate quote is to reach out directly with your project details!";
  }

  // --- CONTACT / HIRE ---
  if (
    lowerPrompt.includes('contact') ||
    lowerPrompt.includes('email') ||
    lowerPrompt.includes('hire') ||
    lowerPrompt.includes('hubungi') ||
    lowerPrompt.includes('collab') ||
    lowerPrompt.includes('kolaborasi')
  ) {
    return "You can reach out for collaboration directly through the 'contact.exe' icon or via his LinkedIn profile!";
  }

  // --- PHILOSOPHY / APPROACH ---
  if (
    lowerPrompt.includes('philosophy') ||
    lowerPrompt.includes('approach') ||
    lowerPrompt.includes('process') ||
    lowerPrompt.includes('prinsip') ||
    lowerPrompt.includes('pendekatan')
  ) {
    return "Perdana's design philosophy is 'logic + magic' — pairing his engineering-rooted, systematic thinking with creative intuition to produce work that's both functional and visually delightful.";
  }

  // --- FUN / EASTER EGG ---
  if (
    lowerPrompt.includes('joke') ||
    lowerPrompt.includes('fun fact') ||
    lowerPrompt.includes('lucu')
  ) {
    return "Fun fact: Perdana started out in electrical engineering before becoming a designer — so somewhere out there, a circuit diagram is jealous of how clean his icon grids look.";
  }

  // Default response if no keywords match
  return `Hmm, I don't have a specific answer for "${prompt}" yet — but feel free to ask about Perdana's projects, background, skills, clients, or how to get in touch! (This is a dummy response — it'll be replaced by a real LLM later.)`;
}