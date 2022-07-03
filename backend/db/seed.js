const db = require("./db");
const { Artist } = require("../model");
let jsonData = require("./roster.json");

function log(message, type = "log") {
  // Suppress logging in test code.
  if (process.env.NODE_ENV === "test") return;

  switch (type) {
    case "error":
      return console.error(message);
    default:
      return console.log(message);
  }
}

async function seed() {
  await db.sync({ force: true });
  log("db synced!");

  await Promise.all(
    jsonData.data.map(async (artist) => {
      await Artist.create({
        artist: artist.artist,
        rate: artist.rate,
        streams: artist.streams,
      });
    })
  );

  log(`seeded artist`);
}

async function runSeed() {
  log("seeding...");
  try {
    await seed();
  } catch (err) {
    log(err, "error");
    process.exitCode = 1;
  } finally {
    log("closing db connection");
    await db.close();
    log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
