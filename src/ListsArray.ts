export interface ListItem {
  id: number;
  title: string;
  collaborators: boolean;
  collaboratorsName: string[];
  time: string;
}

export const listArray: ListItem[] = [
  {
    id: 1,
    title:
      "Introduction of Large Language Model and Retrieval Augmented Generation",
    collaborators: true,
    collaboratorsName: ["Roger Craig", "Sakeel Avdhay"],
    time: "2 min ago",
  },
  {
    id: 2,
    title: "Always Look On The Bright Side Of Life",
    collaborators: true,
    collaboratorsName: ["Mick Zomnir"],
    time: "yesterday",
  },
  {
    id: 3,
    title: "And Now For Something Completely Different",
    collaborators: false,
    collaboratorsName: [""],
    time: "a week ago",
  },
];
