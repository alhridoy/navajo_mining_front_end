import fs from "fs/promises";

async function countGridCodes() {
  try {
    const data = await fs.readFile("./simulated_data.json", "utf8");
    const jsonData = JSON.parse(data);
    let count = 0;
    jsonData.forEach((item) => {
      if ("grid_code" in item) {
        count++;
      }
    });
    console.log(`Number of grid_code entries: ${count}`);
  } catch (err) {
    console.error(err);
  }
}

countGridCodes();
