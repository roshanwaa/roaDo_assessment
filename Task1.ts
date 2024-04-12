interface User {
  id: string;
  devices: Device[];
}

interface Device {
  logged_in: Date;
  logged_out: Date;
  lastSeenAt: Date;
}

function calculateMonthlyUsers(
  users: User[],
  month: number,
  year: number
): { monthlyLoggedIn: number; activeUsers: number } {
  let monthlyLoggedIn = 0;
  let activeUsers = 0;

  users.forEach((user) => {
    let loggedInThisMonth = false;

    user.devices.forEach((device) => {
      const loginMonth = device.logged_in.getMonth();
      const loginYear = device.logged_in.getFullYear();

      if (
        (loginYear < year || (loginYear === year && loginMonth <= month)) &&
        (device.logged_out === null ||
          device.logged_out.getMonth() > month ||
          device.logged_out.getFullYear() > year)
      ) {
        loggedInThisMonth = true;

        if (
          device.lastSeenAt.getMonth() === month &&
          device.lastSeenAt.getFullYear() === year
        ) {
          activeUsers++;
        }
      }
    });

    if (loggedInThisMonth) {
      monthlyLoggedIn++;
    }
  });

  return { monthlyLoggedIn, activeUsers };
}

// Example usage
const users: User[] = [
  {
    id: '1',
    devices: [
      {
        logged_in: new Date('2024-04-01'),
        logged_out: new Date('2024-04-05'),
        lastSeenAt: new Date('2024-04-30'),
      },
      {
        logged_in: new Date('2024-03-15'),
        logged_out: new Date('2024-04-15'),
        lastSeenAt: new Date('2024-04-30'),
      },
    ],
  },
  // Add more users...
];

const month = 3; // March
const year = 2024;
const { monthlyLoggedIn, activeUsers } = calculateMonthlyUsers(
  users,
  month,
  year
);

console.log('Monthly logged-in users:', monthlyLoggedIn);
console.log('Active users:', activeUsers);
