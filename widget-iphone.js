// Widget "Scarabocchio" per iPhone — da incollare nell'app gratuita Scriptable
const URL_IMG = "https://ywvwpbkhxuowuhqphpoq.supabase.co/storage/v1/object/public/doodle/amico.png?t=" + Date.now();

const w = new ListWidget();
w.backgroundColor = Color.white();
try {
  const img = await new Request(URL_IMG).loadImage();
  w.backgroundImage = img;
} catch (e) {
  const t = w.addText("Nessun disegno ancora ✏️");
  t.textColor = Color.gray();
}
w.refreshAfterDate = new Date(Date.now() + 60 * 1000); // chiede a iOS di aggiornare presto
w.url = "https://fabionsky20.github.io/scarabocchio/"; // tocco sul widget = apre l'app per rispondere

if (config.runsInWidget) Script.setWidget(w); else await w.presentLarge();
Script.complete();
