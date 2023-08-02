import helloWorld from "./endpoints/helloWorld";

export let routes: object[] = [
    { path: '/hello', location: helloWorld }
];
