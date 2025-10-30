import { proficiencyLevels } from "@/features/resume/constants";
import type { Resume } from "@/features/resume/types";

/**
 * デフォルトの資格オブジェクトを作成する
 * @returns { object } - デフォルトの資格オブジェクト
 */
function createDefaultCertification(): NonNullable<Resume["certifications"]>[number] {
  return { name: "" };
}

/**
 * デフォルトのキャリアオブジェクトを作成する
 * @returns { object } - デフォルトのキャリアオブジェクト
 */
function createDefaultCareer(): Resume["careers"][number] {
  return { title: "", description: "" };
}

/**
 * デフォルトの趣味オブジェクトを作成する
 * @returns { object } - デフォルトの趣味オブジェクト
 */
function createDefaultHobby(): Resume["hobbies"][number] {
  return { name: "", description: "" };
}

/**
 * デフォルトの言語オブジェクトを作成する
 * @returns { object } - デフォルトの言語オブジェクト
 */
function createDefaultLanguage(): Resume["languages"][number] {
  return { name: "", proficiency: proficiencyLevels.BEGINNER };
}

/**
 * デフォルトの強み文字列を作成する
 * @returns { string } - デフォルトの強み文字列
 */
function createDefaultStrengths(): Resume["strength"] {
  return "";
}

/**
 * デフォルトの弱み文字列を作成する
 * @returns { string } - デフォルトの弱み文字列
 */
function createDefaultWeaknesses(): Resume["weaknesses"] {
  return "";
}

/**
 * デフォルトの履歴書オブジェクトを作成する
 * @returns { object } - デフォルトの履歴書オブジェクト
 */
function createDefaultValues(): Resume {
  return {
    careers: [createDefaultCareer()],
    hobbies: [createDefaultHobby()],
    certifications: [],
    languages: [createDefaultLanguage()],
    strength: createDefaultStrengths(),
    weaknesses: createDefaultWeaknesses(),
  };
}

export {
  createDefaultCareer,
  createDefaultCertification,
  createDefaultHobby,
  createDefaultLanguage,
  createDefaultStrengths,
  createDefaultValues,
  createDefaultWeaknesses,
};
