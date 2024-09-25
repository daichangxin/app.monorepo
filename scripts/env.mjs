const getPackageJson = async () => {
    return await $`cat package.json`.json();
};

const getDockerEnvMap = async () => {
    const env = await $`cat .docker.env`.then((res) => res.stdout);
    const envs = env.split("\n").filter((line) => line.trim() !== "");
    return envs.reduce((acc, line) => {
        const [key, value] = line.split("=");
        acc[key] = value;
        return acc;
    }, {});
};

export { getPackageJson, getDockerEnvMap };
