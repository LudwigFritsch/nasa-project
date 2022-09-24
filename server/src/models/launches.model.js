const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["NASA", "ESA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  const flightNumber = getNextFlightNumber();
  launches.set(
    flightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["NASA"],
      flightNumber,
    })
  );
}

function getNextFlightNumber() {
  const launchesArray = Array.from(launches.values());
  const nextFlightNumber = Math.max(
    ...launchesArray.map((o) => o.flightNumber + 1)
  );
  return nextFlightNumber;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
