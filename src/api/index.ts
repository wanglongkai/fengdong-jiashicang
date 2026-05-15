import request from './request'
import type {
  TimeRangeParams,
  MetricItem,
  CategoryItem,
  WarehouseData,
  ExpertItem,
  OverviewData,
  SalesTrendItem,
  SalesByCategoryItem,
  SalesByChannelItem,
  TownRankItem,
  IncomeItem,
  LogisticsTrendItem,
  LogisticsHourlyItem,
  LogisticsProviderItem,
  AssistItem,
  PolicyItem,
  ApiResponse,
} from './types'

/* 1. 指标接口契约清单 */
export function getMetrics() {
  return request.get<ApiResponse<MetricItem[]>, MetricItem[]>('/metrics')
}

/* 2. 商品品类 */
export function getCategories() {
  return request.get<ApiResponse<CategoryItem[]>, CategoryItem[]>('/categories')
}

/* 3. 仓储容量 */
export function getWarehouse() {
  return request.get<ApiResponse<WarehouseData>, WarehouseData>('/warehouse')
}

/* 4. 专家列表 */
export function getExperts() {
  return request.get<ApiResponse<ExpertItem[]>, ExpertItem[]>('/experts')
}

/* 5. 总览计数 */
export function getOverview() {
  return request.get<ApiResponse<OverviewData>, OverviewData>('/overview')
}

/* 6. 商品销量额趋势 */
export function getSalesTrend(params?: TimeRangeParams) {
  return request.get<ApiResponse<SalesTrendItem[]>, SalesTrendItem[]>('/sales/trend', { params })
}

/* 7. 销售额品类排序 + 占比 */
export function getSalesByCategory(params?: { start?: string; end?: string }) {
  return request.get<ApiResponse<SalesByCategoryItem[]>, SalesByCategoryItem[]>(
    '/sales/by-category',
    { params },
  )
}

/* 8. 线上线下汇总销售额 */
export function getSalesByChannel(params?: TimeRangeParams) {
  return request.get<ApiResponse<SalesByChannelItem[]>, SalesByChannelItem[]>('/sales/by-channel', {
    params,
  })
}

/* 9. 采购来源乡镇排名 */
export function getPurchaseTownRank(params?: { year?: number; month?: number }) {
  return request.get<ApiResponse<TownRankItem[]>, TownRankItem[]>('/purchase/town-rank', { params })
}

/* 10. 农户+站长增收 */
export function getIncome(params?: TimeRangeParams) {
  return request.get<ApiResponse<IncomeItem[]>, IncomeItem[]>('/income', { params })
}

/* 11. 物流趋势 */
export function getLogisticsTrend(params?: TimeRangeParams) {
  return request.get<ApiResponse<LogisticsTrendItem[]>, LogisticsTrendItem[]>('/logistics/trend', {
    params,
  })
}

/* 12. 小时维度发货量 */
export function getLogisticsHourly(params?: { date?: string }) {
  return request.get<ApiResponse<LogisticsHourlyItem[]>, LogisticsHourlyItem[]>(
    '/logistics/hourly',
    { params },
  )
}

/* 13. 合作物流商家 */
export function getLogisticsProviders() {
  return request.get<ApiResponse<LogisticsProviderItem[]>, LogisticsProviderItem[]>(
    '/logistics/providers',
  )
}

/* 14. 助农订单量/销售额 */
export function getAssist(params?: TimeRangeParams) {
  return request.get<ApiResponse<AssistItem[]>, AssistItem[]>('/assist', { params })
}

/* 15. 政策测算指标 */
export function getPolicy(params?: { dim?: 'month' | 'year' }) {
  return request.get<ApiResponse<PolicyItem[]>, PolicyItem[]>('/policy', { params })
}
