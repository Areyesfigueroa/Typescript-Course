enum Roles { ADMIN, READ_ONLY, AUTHOR };

const person: {
    name: string;
    age: number;
    role: Roles;
} = {
    name: "Aliel",
    age: 26,
    role: Roles.ADMIN
};

let favoriteActivities: any[];
favoriteActivities = ["Hello", 1];

if(person.role === Roles.ADMIN) {
    console.log("is an Admin");
}