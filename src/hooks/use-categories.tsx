import { useCallback, useEffect, useState } from 'react';

import { CategoriesResponse } from '../@types/categories-interface';
import { api } from '../utils/axios/config';

const useCategories = () => {
  const [categories, setCategories] = useState<CategoriesResponse[]>([]);

  const getCategories = useCallback(async () => {
    const response = await api.get('/category');

    setCategories(response.data);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return {
    categories,
  };
};

export { useCategories };
