interface Owner {
    id: number,
    name: string,
    ambition: "HIGH" | "MED" | "LOW",
    frugal: "HIGH" | "MED" | "LOW",
    approval: number,
    tolerance: "HIGH" | "MED" | "LOW"
}

export default Owner;
