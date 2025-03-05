const GUS_API_URL = 'https://api-sdp.stat.gov.pl/api/1.1.0';
const API_KEY = '83R5PsuN8HQNCQVY8eplBgL0mZ3DB2HP54VpV2tdxjs=';

export interface GUSApiResponse {
  data: any;
  meta: {
    totalRecords: number;
    pageSize: number;
    pageNumber: number;
  };
}

class GUSApiService {
  private static headers = {
    'X-ClientId': API_KEY,
    'Accept': 'application/json'
  };

  /**
   * Pobiera dane o rozwodach według województw
   */
  static async getDivorceDataByRegion(): Promise<GUSApiResponse> {
    try {
      const response = await fetch(`${GUS_API_URL}/variables/variable/divorce-by-region`, {
        headers: this.headers
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching divorce data:', error);
      throw error;
    }
  }

  /**
   * Pobiera statystyki długości trwania małżeństw
   */
  static async getMarriageDurationStats(): Promise<GUSApiResponse> {
    try {
      const response = await fetch(`${GUS_API_URL}/variables/variable/marriage-duration`, {
        headers: this.headers
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching marriage duration stats:', error);
      throw error;
    }
  }

  /**
   * Pobiera dane o majątku gospodarstw domowych
   */
  static async getHouseholdAssetsData(): Promise<GUSApiResponse> {
    try {
      const response = await fetch(`${GUS_API_URL}/variables/variable/household-assets`, {
        headers: this.headers
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching household assets data:', error);
      throw error;
    }
  }

  /**
   * Pobiera statystyki dotyczące opieki nad dziećmi po rozwodzie
   */
  static async getChildCustodyStats(): Promise<GUSApiResponse> {
    try {
      const response = await fetch(`${GUS_API_URL}/variables/variable/child-custody-after-divorce`, {
        headers: this.headers
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching child custody stats:', error);
      throw error;
    }
  }
}

export default GUSApiService;
