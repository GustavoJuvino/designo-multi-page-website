export default async function getData(url: string,) {
    const res = await import(`@/app/api/${url}/route`);
    return await (await res.GET()).json();
  }
