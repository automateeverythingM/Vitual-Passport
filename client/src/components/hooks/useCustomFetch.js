import { useContext, useEffect } from "react";
import useFetch from "use-http";
import { Context } from "../../globalState";
import { setLoading } from "../../globalState/actions";

export const useCustomFetch = (url, options) => {
  const { dispatch } = useContext(Context);
  const { get, post, put, del, response, loading, error, cache } = useFetch(
    url,
    options
  );

  useEffect(() => {
    if (loading) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (error) {
    }
  }, [error]);

  return { get, post, put, del, response, cache };
};
