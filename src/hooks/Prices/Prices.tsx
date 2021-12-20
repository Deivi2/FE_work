import { useCallback, useEffect, useRef, useState } from "react";
import { IPrice, IPrices } from "typings";

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const Prices = () => {
  const [priceValues, setPriceValues] = useState<Array<IPrice>>([]);
  const [allPrices, setAllPrices] = useState<Array<IPrice>>([]);
  const [displayCurrencies, setDisplayCurrencies] = useState<Array<string>>([]);
  const interval = useRef<ReturnType<typeof setInterval>>();
  const secondFetch = useRef(false);

  const initFetch = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const bpi: IPrices = data.bpi;
        secondFetch.current = true;
        setDisplayCurrencies(Object.keys(bpi));
        setPriceValues(Object.values(bpi));
        setAllPrices(Object.values(bpi));
      });
  }, []);

  const intervalFetch = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const bpi: IPrices = data.bpi;
        setPriceValues(
          Object.values(bpi).filter((price: IPrice) =>
            displayCurrencies.includes(price.code)
          )
        );
        setAllPrices(Object.values(bpi));
      });
  }, [displayCurrencies]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  useEffect(() => {
    interval.current = setInterval(async () => {
      intervalFetch();
    }, 60000);

    return () => {
      clearInterval(interval.current as ReturnType<typeof setInterval>);
    };
  }, [intervalFetch]);

  const prices = priceValues.filter((price: IPrice) =>
    displayCurrencies.includes(price.code)
  );

  const deletedPrices = allPrices.filter(
    (price: IPrice) => !displayCurrencies.includes(price.code)
  );

  const addPrice = useCallback(
    (price: string) => {
      const pricesToShow = [...displayCurrencies, price];
      setDisplayCurrencies(pricesToShow);
      setPriceValues(
        allPrices.filter((price) => pricesToShow.includes(price.code))
      );
    },
    [allPrices, displayCurrencies]
  );

  const deletePrice = useCallback(
    (price: string) => {
      setDisplayCurrencies(
        displayCurrencies.filter((value) => value !== price)
      );
    },
    [displayCurrencies]
  );

  return { prices, addPrice, deletePrice, deletedPrices };
};

export default Prices;
