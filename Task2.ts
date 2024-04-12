interface Trip {
  start: string; // pick-up point or warehouse
  end: string; // drop-off point or warehouse
}

interface Shipment {
  pickups: string[]; // list of pick-up points
  dropoffs: string[]; // list of drop-off points
}

function isValidTrips(shipment: Shipment, trips: Trip[]): boolean {
  const allPoints = [...shipment.pickups, ...shipment.dropoffs];
  const coveredPoints = new Set<string>();

  for (const trip of trips) {
    if (!allPoints.includes(trip.start) && !allPoints.includes(trip.end)) {
      // Start and end points of the trip must be either pick-up, drop-off, or warehouse
      return false;
    }

    if (
      !shipment.pickups.includes(trip.start) &&
      !shipment.dropoffs.includes(trip.end)
    ) {
      // Trip must start from a pick-up point or warehouse and end at a drop-off point or warehouse
      return false;
    }

    coveredPoints.add(trip.start);
    coveredPoints.add(trip.end);
  }

  // Check if all pick-up and drop-off points are covered in the trips
  for (const point of allPoints) {
    if (!coveredPoints.has(point)) {
      return false;
    }
  }

  return true;
}

// Example usage
const shipment: Shipment = {
  pickups: ['A', 'B'],
  dropoffs: ['C', 'D'],
};

const trips: Trip[] = [
  { start: 'A', end: 'W' },
  { start: 'B', end: 'W' },
  { start: 'W', end: 'C' },
  { start: 'W', end: 'D' },
];

console.log(isValidTrips(shipment, trips)); // Output: true
