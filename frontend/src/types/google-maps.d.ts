// This file contains type declarations for Google Maps JavaScript API
declare global {
  interface Window {
    google: typeof google;
  }
  
  namespace google.maps {
    // Basic map types
    class Map {
      constructor(mapDiv: HTMLElement, opts?: MapOptions);
      setCenter(latLng: LatLng | LatLngLiteral): void;
      setZoom(zoom: number): void;
      // Add other methods as needed
    }

    interface MapOptions {
      center?: LatLng | LatLngLiteral;
      zoom?: number;
      // Add other options as needed
    }

    class Marker {
      constructor(opts?: MarkerOptions);
      setMap(map: Map | null): void;
      setPosition(latLng: LatLng | LatLngLiteral): void;
      // Add other methods as needed
    }

    interface MarkerOptions {
      position?: LatLng | LatLngLiteral;
      map?: Map;
      title?: string;
      icon?: string | google.maps.Icon | google.maps.Symbol;
      // Add other options as needed
    }

    // Places related types
    namespace places {
      class PlacesService {
        constructor(attrContainer: HTMLElement | Map);
        nearbySearch(
          request: PlaceSearchRequest,
          callback: (
            results: PlaceResult[] | null,
            status: PlacesServiceStatus,
            pagination: PlaceSearchPagination | null
          ) => void
        ): void;
      }

      interface PlaceSearchRequest {
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        location?: LatLng | LatLngLiteral;
        radius?: number;
        type?: string;
        keyword?: string;
        rankBy?: RankBy;
      }

      interface PlaceResult {
        name?: string;
        place_id?: string;
        vicinity?: string;
        geometry?: {
          location?: google.maps.LatLng;
        };
        // Add other properties as needed
      }

      type RankBy = 'PROMINENCE' | 'DISTANCE';
      type PlacesServiceStatus = 'OK' | 'ZERO_RESULTS' | 'ERROR' | 'INVALID_REQUEST' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'UNKNOWN_ERROR';
      
      interface PlaceSearchPagination {
        hasNextPage: boolean;
        nextPage(): void;
      }
    }

    // Basic geometry types
    class LatLng {
      constructor(lat: number, lng: number);
      lat(): number;
      lng(): number;
    }

    interface LatLngLiteral {
      lat: number;
      lng: number;
    }

    interface LatLngBounds {
      // Add methods as needed
    }

    interface LatLngBoundsLiteral {
      east: number;
      north: number;
      south: number;
      west: number;
    }
  }
}

export {};
