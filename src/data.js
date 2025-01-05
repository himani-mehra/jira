export const RANDOM_USERS = [
  { email: "user1@example.com", name: "User One" },
  { email: "user2@example.com", name: "User Two" },
  { email: "user3@example.com", name: "User Three" },
];

export const getFreeToUseAvatarImage = (index) => {
  return `https://randomuser.me/api/portraits/men/${index}.jpg`; // Example URL for avatars
};
