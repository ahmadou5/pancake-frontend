import { Toast } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { CampaignType, FarmConfig, Nft, PoolConfig, Team } from 'config/constants/types'

export type TranslatableText =
  | string
  | {
      id: number
      fallback: string
      data?: {
        [key: string]: string | number
      }
    }

export interface Farm extends FarmConfig {
  tokenAmount?: BigNumber
  quoteTokenAmount?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  lpTotalSupply?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: BigNumber
  userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
  }
}

export interface Pool extends PoolConfig {
  totalStaked?: BigNumber
  startBlock?: number
  endBlock?: number
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
}

export interface Profile {
  userId: number
  points: number
  teamId: number
  nftAddress: string
  tokenId: number
  isActive: boolean
  username: string
  nft?: Nft
  team: Team
  hasRegistered: boolean
}

// Slices states

export interface ToastsState {
  data: Toast[]
}

export interface FarmsState {
  data: Farm[]
}

export interface PoolsState {
  data: Pool[]
}

export interface ProfileState {
  isInitialized: boolean
  isLoading: boolean
  hasRegistered: boolean
  data: Profile
}

export type TeamResponse = {
  0: string
  1: string
  2: string
  3: string
  4: boolean
}

export type TeamsById = {
  [key: string]: Team
}

export interface TeamsState {
  isInitialized: boolean
  isLoading: boolean
  data: TeamsById
}

export interface Achievement {
  id: string
  type: CampaignType
  address: string
  title: TranslatableText
  description?: TranslatableText
  badge: string
  points: number
}

export interface AchievementState {
  data: Achievement[]
}

// API Price State
export interface PriceApiList {
  /* eslint-disable camelcase */
  [key: string]: {
    name: string
    symbol: string
    price: string
    price_BNB: string
  }
}

export interface PriceApiListThunk {
  /* eslint-disable camelcase */
  [key: string]: number
}

export interface PriceApiResponse {
  /* eslint-disable camelcase */
  updated_at: string
  data: PriceApiList
}

export interface PriceApiThunk {
  /* eslint-disable camelcase */
  updated_at: string
  data: PriceApiListThunk
}

export interface PriceState {
  isLoading: boolean
  lastUpdated: string
  data: PriceApiListThunk
}

// Block

export interface BlockState {
  currentBlock: number
  initialBlock: number
}

// Predictions

export enum Position {
  UP = 'up',
  DOWN = 'down',
}

export enum PredictionStatus {
  INITIAL = 'initial',
  LIVE = 'live',
  PAUSED = 'paused',
}

export interface RoundResponse {
  epoch: number
  startBlock: number
  lockBlock: number
  endBlock: number
  lockPrice: number
  closePrice: number
  totalAmount: number
  bullAmount: number
  bearAmount: number
  rewardBaseCalAmount: number
  rewardAmount: number
  oracleCalled: boolean
}

export interface Round {
  epoch: number
  startBlock: number
  lockBlock?: number
  endBlock: number
  lockPrice: BigNumber
  closePrice: BigNumber
  totalAmount: BigNumber
  bullAmount: BigNumber
  bearAmount: BigNumber
  rewardBaseCalAmount: BigNumber
  rewardAmount: BigNumber
  oracleCalled: boolean
}

export interface RoundData {
  [key: string]: Round
}

export interface PredictionsState {
  status: PredictionStatus
  currentEpoch: number
  isLoading: boolean
  isHistoryPaneOpen: boolean
  isChartPaneOpen: boolean
  rounds: {
    [key: string]: RoundResponse
  }
}

// Global state

export interface State {
  achievements: AchievementState
  block: Block
  farms: FarmsState
  prices: PriceState
  pools: PoolsState
  predictions: PredictionsState
  profile: ProfileState
  teams: TeamsState
  toasts: ToastsState
}
