function mergeProjection(...configs) {
  // Объединяем все переданные объекты в один
  return configs.reduce((mergedConfig, currentConfig) => {
    return {
      ...mergedConfig,
      ...currentConfig
    };
  }, {});
}

// Пример использования
const baseProjection = {
  type: 'mercator',
  scale: 1000,
  center: [0, 0]
};

const additionalConfig = {
  scale: 1500,
  rotate: [10, 0]
};

const finalConfig = mergeProjection(baseProjection, additionalConfig);

console.log(finalConfig);
