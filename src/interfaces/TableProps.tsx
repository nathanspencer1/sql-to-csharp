export interface TableProps {
  id: number;
  columnName: string;
  type: string;
  computed: string;
  length: number;
  prec: number;
  scale: number;
  nullable: boolean;
  altName: string;
  public: boolean;
  property: boolean;
}
