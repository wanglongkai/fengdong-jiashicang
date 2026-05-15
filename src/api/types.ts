/* 通用 */
export interface ApiResponse<T> {
  code: number
  msg: string
  data: T
}

export type TimeDim = 'day' | 'month' | 'year'

export interface TimeRangeParams {
  dim?: TimeDim
  start?: string
  end?: string
}

/* 1. 指标契约清单 GET /metrics */

export interface MetricItem {
  metric_name: string
  field_name: string
  data_source: string
  update_freq: string
  unit: string
  stat_caliber: string
  is_history: string
  is_api: string
  dimension: string
  module: string
}

/* 2. 商品品类 GET /categories */

export interface CategoryItem {
  category_id: number
  category_name: string
  unit: string
  ref_price: number
}

/* 3. 仓储容量 GET /warehouse */

export interface WarehouseItem {
  warehouse_id: number
  warehouse_name: string
  township: string
  capacity_ton: number
  storage_type: string
  remark: string
}

export interface WarehouseData {
  totalCapacityTon: number
  warehouseCount: number
  list: WarehouseItem[]
}

/* 4. 专家列表 GET /experts */

export interface ExpertItem {
  expert_id: number
  expert_name: string
  field: string
  title: string
  intro: string
}

/* 5. 总览计数 GET /overview */

export interface OverviewData {
  farmerCount: number
  activeVillageShop: number
  expertCount: number
  servedFarmerCount: number
  drivenEmployment: number
  drivenFarmerIncome: number
  policyPeriod: string
}

/* 6. 商品销量额趋势 GET /sales/trend */

export interface SalesTrendItem {
  period: string
  order_cnt: number
  amount: number
  quantity: number
}

/* 7. 销售额品类排序+占比 GET /sales/by-category */

export interface SalesByCategoryItem {
  category_id: number
  category_name: string
  unit: string
  order_cnt: number
  amount: number
  quantity: number
  ratioPercent: number
}

/* 8. 线上线下汇总销售额 GET /sales/by-channel */

export interface SalesByChannelItem {
  period: string
  channel: string
  order_cnt: number
  amount: number
}

/* 9. 采购来源乡镇排名 GET /purchase/town-rank */

export interface TownRankItem {
  rank: number
  town_id: number
  town_name: string
  town_type: string
  main_category: string
  purchase_amount: number
  purchase_qty: number
  buy_farmer_cnt: number
}

/* 10. 农户+站长增收 GET /income */

export interface IncomeItem {
  period: string
  farmer_income: number
  station_income: number
  total_income: number
}

/* 11. 物流趋势 GET /logistics/trend */

export interface LogisticsTrendItem {
  period: string
  ship_weight_ton: number
  order_cnt: number
  vehicle_cnt: number
  drone_order_cnt: number
  drone_sortie_cnt: number
  avg_delivery_hours: number
}

/* 12. 小时维度发货量 GET /logistics/hourly */

export interface LogisticsHourlyItem {
  period: string
  ship_weight_ton: number
  order_cnt: number
}

/* 13. 合作物流商家 GET /logistics/providers */

export interface LogisticsProviderItem {
  provider_id: number
  provider_name: string
  provider_type: string
  provider_code: string
  data_source: string
  is_drone: number
}

/* 14. 助农 GET /assist */

export interface AssistItem {
  period: string
  assist_order_cnt: number
  assist_amount: number
}

/* 15. 政策测算指标 GET /policy */

export interface PolicyItem {
  period: string | number
  driven_employment: number
  driven_farmer_income: number
  served_farmer_cnt: number
  active_village_shop: number
  livestock_output: number
  processing_output: number
  facility_area: number
  mushroom_sticks: number
}
