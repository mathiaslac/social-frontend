import { useState, useEffect, useCallback } from "react";

/**
 * @param url Array<string> | string
 * @param refreshTime number
 */
const usePing = (urls) => {
  const [pings, setPings] = useState([]);

  const test = useCallback(async (urls) => {
    /* Math.floor shortcut --> bitwise
        const d = ~~3.4;

        const n = -6
        const abs = (n ^ (n >> 31)) - (n >> 31);

        const abs1 = Math.abs(n)
    */
    const fetchUrl = async (url) => {
      const t1 = performance.now();
      await fetch(url);
      const t2 = performance.now();
      const ms = t2 - t1;
      return ms;
    };
    if (typeof urls === "string") {
      const ms = fetchUrl(urls);
      setPings([ms]);
    } else {
      const pings = await Promise.all(urls.map(fetchUrl));
      setPings(pings);
    }
  }, []);

  useEffect(() => {
    test(urls);
  }, [test, urls]);

  return typeof urls === "string" ? pings.at(0) : pings;
};
/*
const F = () => {
  const singlePing = usePing("123.434.234.34", 10_000);

  const [ping1, ping2, ping3] = usePing(
    [
      "123.434.264.34",
      "123.434.214.34",
      "123.434.934.34",
      "123.434.234.34",
      "123.434.234.34",
    ],
    20_000
  );
  return <></>;
};
*/
export default usePing;

// imbriqué = nested
