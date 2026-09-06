export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  content: {
    heading: string;
    body: string[];
    code?: { language: string; snippet: string };
  }[];
}

export const blogData: Record<string, BlogPost> = {
  "solidity-smart-contract-security": {
    slug: "solidity-smart-contract-security",
    title: "Securing EVM Smart Contracts: Defending Against Reentrancy and State Pitfalls",
    summary: "A practical deep dive into smart contract defensive programming, the Checks-Effects-Interactions (CEI) pattern, and storage layout optimization.",
    date: "2025-08-14",
    readTime: "5 min read",
    tags: ["Solidity", "Security", "Web3", "Ethereum"],
    content: [
      {
        heading: "1. The Anatomy of Reentrancy",
        body: [
          "Reentrancy remains one of the most destructive attack vectors in EVM smart contract history. It occurs when an external contract call hands control back to an untrusted recipient before the calling contract updates its internal state balances.",
          "When the malicious contract receives control (via fallback or receive functions), it recursively calls the original contract's withdrawal function, draining funds repeatedly."
        ],
        code: {
          language: "solidity",
          snippet: `// INSECURE PATTERN: Interacting before updating state
function withdraw(uint256 amount) external {
    require(balances[msg.sender] >= amount, "Insufficient");
    (bool sent, ) = msg.sender.call{value: amount}(""); // Vulnerability here!
    require(sent, "Transfer failed");
    balances[msg.sender] -= amount;
}`
        }
      },
      {
        heading: "2. The Checks-Effects-Interactions (CEI) Standard",
        body: [
          "The foundational defense against reentrancy is the Checks-Effects-Interactions pattern. Always perform all authorization checks first, update internal state variables second, and only then make external calls to external addresses or contracts."
        ],
        code: {
          language: "solidity",
          snippet: `// SECURE PATTERN: Checks-Effects-Interactions (CEI)
function withdrawSecure(uint256 amount) external nonReentrant {
    // 1. CHECKS
    require(balances[msg.sender] >= amount, "Insufficient balance");

    // 2. EFFECTS (Update state before external transfer)
    balances[msg.sender] -= amount;

    // 3. INTERACTIONS
    (bool sent, ) = msg.sender.call{value: amount}("");
    require(sent, "Transfer failed");
}`
        }
      },
      {
        heading: "3. Storage Layout & Gas Profiling",
        body: [
          "Every 32-byte storage slot in the EVM costs significant gas to read (SLOAD) and write (SSTORE). By packing related uint128, uint64, or boolean variables into consecutive positions within a struct, multiple state mutations can be committed within a single storage write slot.",
          "Combining defensive modifiers like OpenZeppelin's ReentrancyGuard with optimized storage layout guarantees both ironclad security and competitive gas efficiency for protocol users."
        ]
      }
    ]
  },
  "algorithmic-trading-risk-management": {
    slug: "algorithmic-trading-risk-management",
    title: "Algorithmic Risk Management: The Math Behind Capital Preservation",
    summary: "How quantitative risk rules, dynamic position sizing, and volatility-adjusted stops prevent ruin in algorithmic execution engines.",
    date: "2025-07-22",
    readTime: "6 min read",
    tags: ["Trading", "Quantitative", "TypeScript", "Risk Management"],
    content: [
      {
        heading: "1. The Fallacy of Win Rate",
        body: [
          "Novice traders fixate on high win-rate strategies (e.g. 80%+), often through hidden martingale scaling or catastrophic fat-tail risk. In algorithmic systems, the most profitable and durable strategies typically operate with win rates between 40% and 55%, sustained entirely by asymmetric Risk-to-Reward (R:R) multiples.",
          "A strategy with a 45% win rate that averages 2.5R on winning trades and cuts losers at 1.0R delivers consistent positive mathematical expectation over hundreds of executions."
        ]
      },
      {
        heading: "2. Mathematical Expectancy Formula & Position Sizing",
        body: [
          "The engine's long-term viability is calculated via Expected Value per trade: EV = (Win Rate × Average Win) - (Loss Rate × Average Loss).",
          "If the expected value is positive, scaling the position size relative to account equity using fractional Kelly criterion or fixed fractional percentage risk (e.g. 1% to 2% max portfolio loss per position) protects the account from drawdowns exceeding mathematical recovery thresholds."
        ],
        code: {
          language: "typescript",
          snippet: `interface PositionSizingParams {
  accountEquity: number;
  riskPercentage: number; // e.g. 1.0 for 1% portfolio risk
  entryPrice: number;
  stopLossPrice: number;
  contractMultiplier?: number;
}

interface RiskCalculationResult {
  riskAmountUsd: number;
  positionUnits: number;
  perUnitRisk: number;
  notionalValueUsd: number;
}

/**
 * Calculates exact position sizing based on strict dollar risk budget.
 * Enforces capital preservation before trade dispatch to exchange.
 */
export function calculatePositionSize({
  accountEquity,
  riskPercentage,
  entryPrice,
  stopLossPrice,
  contractMultiplier = 1.0,
}: PositionSizingParams): RiskCalculationResult {
  const perUnitRisk = Math.abs(entryPrice - stopLossPrice);
  if (perUnitRisk <= 0) {
    throw new Error("Invalid stop loss: distance to entry must exceed 0");
  }

  const riskAmountUsd = accountEquity * (riskPercentage / 100.0);
  const positionUnits = (riskAmountUsd / perUnitRisk) / contractMultiplier;
  const notionalValueUsd = positionUnits * entryPrice * contractMultiplier;

  return {
    riskAmountUsd: Number(riskAmountUsd.toFixed(2)),
    positionUnits: Number(positionUnits.toFixed(4)),
    perUnitRisk: Number(perUnitRisk.toFixed(4)),
    notionalValueUsd: Number(notionalValueUsd.toFixed(2)),
  };
}`
        }
      },
      {
        heading: "3. Volatility-Adjusted Stops (ATR Modeling)",
        body: [
          "Fixed tick or fixed percentage stops fail when market volatility regimes shift. In high volatility regimes, a static 1% stop triggers on market noise; in low volatility regimes, it leaves too much capital exposed.",
          "Employing the Average True Range (ATR) with dynamic multipliers dynamically expands or contracts stop distances according to real-time market dispersion."
        ]
      },
      {
        heading: "4. Real-World Architecture: Trinity v2 (Hyper Gemma AI Trader)",
        body: [
          "This mathematical foundation is implemented in production within [hyper-gemma-ai-trader](https://github.com/silkiy/hyper-gemma-ai-trader) — a production-ready Autonomous Quantitative Trading System (Trinity v2) engineered with Bitget Futures, Pure Math Quant Engine (Hurst/Z-Score), MongoDB, Node.js, and TypeScript.",
          "Trinity v2 features a high-speed Pure Math Quant Engine that computes the Hurst Exponent (H) for market regime classification (H < 0.5 mean-reverting vs. H > 0.5 trending momentum) combined with Rolling Z-Score normalization for statistical entries.",
          "AI (Gemma 4) is designed as an optional layer for macro regime analysis rather than a blocking execution bottleneck. By decoupling statistical signal generation from LLM inference, the pure math TypeScript quant engine executes orders with ultra-fast deterministic latency on Bitget Futures."
        ],
        code: {
          language: "typescript",
          snippet: `export interface MarketRegime {
  hurst: number;
  zScore: number;
  regime: "MEAN_REVERTING" | "TRENDING" | "RANDOM_WALK";
  tradeAllowed: boolean;
}

/**
 * Trinity v2 Pure Math Quant Engine
 * Computes Rolling Z-Score and Hurst Exponent for Bitget Futures execution.
 * Source: https://github.com/silkiy/hyper-gemma-ai-trader
 */
export class TrinityQuantEngine {
  public static calculateZScore(prices: number[], window: number = 20): number {
    if (prices.length < window) return 0;
    const slice = prices.slice(-window);
    const mean = slice.reduce((sum, p) => sum + p, 0) / window;
    const variance = slice.reduce((sum, p) => sum + Math.pow(p - mean, 2), 0) / window;
    const stdDev = Math.sqrt(variance);
    return stdDev === 0 ? 0 : (prices[prices.length - 1] - mean) / stdDev;
  }

  public static calculateHurst(prices: number[]): number {
    if (prices.length < 20) return 0.5;
    const returns: number[] = [];
    for (let i = 1; i < prices.length; i++) {
      returns.push(Math.log(prices[i] / prices[i - 1]));
    }
    const n = returns.length;
    const mean = returns.reduce((acc, r) => acc + r, 0) / n;
    const deviations = returns.map((r) => r - mean);

    let cumulative = 0;
    let maxD = -Infinity;
    let minD = Infinity;
    for (const d of deviations) {
      cumulative += d;
      if (cumulative > maxD) maxD = cumulative;
      if (cumulative < minD) minD = cumulative;
    }

    const range = maxD - minD;
    const variance = deviations.reduce((acc, d) => acc + d * d, 0) / n;
    const stdDev = Math.sqrt(variance) || 1e-8;
    const rs = range / stdDev;
    return Math.min(Math.max(Math.log(rs) / Math.log(n), 0), 1);
  }
}`
        }
      }
    ]
  },
  "flutter-biometric-face-recognition": {
    slug: "flutter-biometric-face-recognition",
    title: "On-Device Biometric Verification in Flutter: High Accuracy at 60 FPS",
    summary: "Engineering lessons from building Absensi RSD: running TensorFlow Lite facial embeddings on background isolates without freezing UI threads.",
    date: "2025-05-19",
    readTime: "5 min read",
    tags: ["Flutter", "Machine Learning", "Mobile", "Dart"],
    content: [
      {
        heading: "1. The Mobile Biometric Bottleneck",
        body: [
          "When building enterprise mobile attendance applications, face recognition must occur in real time so users immediately see visual feedback when their face is positioned correctly inside the camera viewfinder.",
          "However, executing deep convolutional neural network inference on continuous 30 FPS camera frames will immediately saturate the single Dart UI thread, resulting in severe frame drops and janky animations."
        ]
      },
      {
        heading: "2. Offloading Inference to Dart Isolates",
        body: [
          "The solution is architecting an asynchronous producer-consumer pipeline. The camera preview runs unhindered on the main thread, while downsampled YUV/RGB byte buffers are transmitted via SendPort to a long-lived Dart Isolate.",
          "The isolate runs the TensorFlow Lite quantized model, computes the 128-dimensional facial embedding vector, and sends back lightweight coordinate bounding boxes and identity match confidence scores."
        ],
        code: {
          language: "dart",
          snippet: `// Passing image buffer to isolate without blocking UI
Future<void> runInferenceInIsolate(CameraImage image) async {
  if (_isProcessing) return; // Drop frame if previous inference still running
  _isProcessing = true;
  
  final responsePort = ReceivePort();
  _isolateSendPort.send(InferenceMessage(
    planes: image.planes.map((p) => p.bytes).toList(),
    width: image.width,
    height: image.height,
    sendPort: responsePort.sendPort,
  ));
  
  final result = await responsePort.first as RecognitionResult;
  _isProcessing = false;
  updateBoundingBoxes(result);
}`
        }
      },
      {
        heading: "3. Anti-Spoofing & Geofencing Integrity",
        body: [
          "A biometric face attendance system is only as secure as its physical location verification. To prevent mock-location spoofing, client payloads are cryptographically signed with on-device hardware keystore tokens before transmission to the backend validation server."
        ]
      }
    ]
  },
  "hyper-gemma-ai-trader": {
    slug: "hyper-gemma-ai-trader",
    title: "Hyper-Gemma AI Trader: Autonomous Bitget Futures Execution with Trinity v2 Quant Engine",
    summary: "Architecture deep dive into Hyper-Gemma AI Trader (Trinity v2): engineering a Pure Quant Tactical Engine (Z-Score, Hurst Exponent, VWAP, Kalman Filter) with passive Gemma 4 AI for zero-latency, hallucination-free cryptocurrency futures execution.",
    date: "2025-08-28",
    readTime: "7 min read",
    tags: ["Quantitative", "TypeScript", "Bitget Futures", "Algorithmic Trading", "AI"],
    content: [
      {
        heading: "1. The Perils of LLM Hesitation in Futures Trading",
        body: [
          "In hyper-liquid cryptocurrency derivative markets like Bitget Futures, execution speed and statistical certainty are paramount. Traditional attempts to integrate Large Language Models (LLMs) directly into high-frequency order execution loops quickly encounter fatal obstacles: token-generation latency ranging from 400ms to 3,000ms, non-deterministic decision drift, and hallucinations during sudden volatility spikes.",
          "When a leveraged perpetual futures contract faces sudden liquidation cascades or funding rate anomalies, an automated execution engine cannot afford cognitive hesitation or probabilistic prose generation. This fundamental constraint catalyzed the evolution of Hyper-Gemma AI Trader into the Trinity v2 Quant Engine: an autonomous architecture where mathematical discipline supersedes generative AI."
        ]
      },
      {
        heading: "2. The Pure Quant Tactical Engine (Quant Trinity)",
        body: [
          "Trinity v2 operates on a Pure Quant Tactical paradigm where four deterministic mathematical models act as the supreme decision authority without human or generative interference:",
          "• Rolling Z-Score: Computes standardized price displacement (Z = (Pt - μ) / σ) across configurable sliding windows to pinpoint statistical overextension and mean-reversion extremes.",
          "• Hurst Exponent (H): Dynamically determines current market fractal memory via Rescaled Range (R/S) analysis. H < 0.5 designates mean-reverting regimes (enabling statistical scalp entries), H > 0.5 signals persistent trending momentum (enabling trailing breakouts), and H ≈ 0.5 flags untradable random walks.",
          "• Volume-Weighted Average Price (VWAP): Establishes dynamic institutional liquidity equilibrium, ensuring orders are never dispatched into adverse liquidity vacuums.",
          "• 1D Kalman Filter: Continuously filters out microstructure high-frequency noise from raw tick feeds to estimate the true unobserved price state and velocity vector."
        ],
        code: {
          language: "typescript",
          snippet: `interface TacticalState {
  regime: "MEAN_REVERTING" | "TRENDING" | "RANDOM_WALK";
  zScore: number;
  filteredPrice: number;
  action: "LONG" | "SHORT" | "HOLD";
  confidence: number;
}

export class KalmanPriceFilter {
  private estimate: number;
  private errorEstimate: number = 1.0;
  private readonly processNoise: number;
  private readonly measurementNoise: number;

  constructor(initialPrice: number, processNoise = 1e-4, measurementNoise = 1e-2) {
    this.estimate = initialPrice;
    this.processNoise = processNoise;
    this.measurementNoise = measurementNoise;
  }

  public update(measurement: number): number {
    this.errorEstimate += this.processNoise;
    const kalmanGain = this.errorEstimate / (this.errorEstimate + this.measurementNoise);
    this.estimate = this.estimate + kalmanGain * (measurement - this.estimate);
    this.errorEstimate = (1 - kalmanGain) * this.errorEstimate;
    return this.estimate;
  }
}

export class TrinityTacticalEngine {
  public static computeZScore(prices: number[], window = 20): number {
    if (prices.length < window) return 0;
    const slice = prices.slice(-window);
    const mean = slice.reduce((a, b) => a + b, 0) / window;
    const variance = slice.reduce((acc, p) => acc + Math.pow(p - mean, 2), 0) / window;
    const stdDev = Math.sqrt(variance);
    return stdDev === 0 ? 0 : (prices[prices.length - 1] - mean) / stdDev;
  }

  public static computeHurst(prices: number[]): number {
    if (prices.length < 20) return 0.5;
    const returns = prices.slice(1).map((p, i) => Math.log(p / prices[i]));
    const n = returns.length;
    const mean = returns.reduce((a, b) => a + b, 0) / n;
    const deviations = returns.map((r) => r - mean);

    let cum = 0;
    let max = -Infinity;
    let min = Infinity;
    for (const d of deviations) {
      cum += d;
      if (cum > max) max = cum;
      if (cum < min) min = cum;
    }
    const stdDev = Math.sqrt(deviations.reduce((acc, d) => acc + d * d, 0) / n) || 1e-8;
    return Math.min(Math.max(Math.log((max - min) / stdDev) / Math.log(n), 0), 1);
  }

  public static evaluateMarket(prices: number[], filter: KalmanPriceFilter): TacticalState {
    const currentPrice = prices[prices.length - 1];
    const filteredPrice = filter.update(currentPrice);
    const zScore = this.computeZScore(prices, 20);
    const hurst = this.computeHurst(prices);

    let regime: TacticalState["regime"] = "RANDOM_WALK";
    let action: TacticalState["action"] = "HOLD";

    if (hurst < 0.45) {
      regime = "MEAN_REVERTING";
      if (zScore <= -2.0) action = "LONG";
      else if (zScore >= 2.0) action = "SHORT";
    } else if (hurst > 0.55) {
      regime = "TRENDING";
      if (zScore > 1.0 && currentPrice > filteredPrice) action = "LONG";
      else if (zScore < -1.0 && currentPrice < filteredPrice) action = "SHORT";
    }

    return {
      regime,
      zScore: Number(zScore.toFixed(2)),
      filteredPrice: Number(filteredPrice.toFixed(2)),
      action,
      confidence: Math.abs(hurst - 0.5) * 2,
    };
  }
}`
        }
      },
      {
        heading: "3. De-biasing AI: The MOCK_AI=true Strategy",
        body: [
          "In the original Hyper-Gemma design, Google's Gemma 4 model was queried locally via Ollama to evaluate multi-candle sentiment and macro narratives. While Gemma produced articulate market rationales, latency benchmarks revealed that generating inferences added hundreds of milliseconds of overhead while introducing occasional hallucinated bias during flash crashes.",
          "Trinity v2 fundamentally restructured this dynamic by decoupling AI into a passive background advisor. When configured with MOCK_AI=true, the execution pipeline entirely bypasses synchronous LLM roundtrips, allowing the bot to submit orders to Bitget within sub-millisecond windows. When AI is enabled, it acts solely as an asynchronous macro regime classifier, unable to override mathematically validated stop-losses or risk limits."
        ]
      },
      {
        heading: "4. Production Telemetry & Bitget Futures Execution",
        body: [
          "The system is fully implemented in TypeScript running on Node.js, backed by MongoDB for persistent trade telemetry, position audit logs, and equity curve reconstruction. Order dispatching communicates directly with Bitget's Futures V2 API via secure HMAC-SHA256 authenticated REST and WebSocket channels.",
          "Complete open-source code, setup instructions, and quant algorithms are available in the public repository: [hyper-gemma-ai-trader on GitHub](https://github.com/silkiy/hyper-gemma-ai-trader)."
        ]
      }
    ]
  }
};
